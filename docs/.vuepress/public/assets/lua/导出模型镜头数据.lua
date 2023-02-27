
local create_log = true --log文件输出路径为 'w3x2lni路径\log\model_camera.txt'
local path_script = "core\\list_model_camera.lua" --地图内储存镜头数据的lua文件 'scripts\...'

local mt = {}

mt.info = {
    name = '导出模型镜头数据',
    version = 1.0,
    author = '金皮蛋',
    description = [[
        在地图文件夹scripts\core\list_model_camera.lua文件中储存外导模型的镜头数据
        注：没有镜头的模型不会被储存
    ]],
}

local root = require 'backend.w2l_path'

local Log = setmetatable({_log={},save=function(self)
    io.save(root / 'log' / 'model_camera.txt', table.concat(self._log, '\n'))
    self._log = {}
 end},{__call=function(self,...)
    table.insert(self._log,table.concat({...},'\t'))
end})

local CameraModel = {}

local function save_model_camera(name, data)
    local function f(a, b, c)
        if #data <= 2 then
            if #data == 0 then return '{0,0,0}' end
            local v = data[1]
            table.remove(data, 1)
            return v
        end
        local function m(v)
            if v then
                return math.floor(v) --string.format("%.2f", v)
            end
            return 0
        end
        return '{'..m(data[a])..', '..m(data[b])..', '..m(data[c])..'}'
    end
    table.insert(CameraModel, '["'..name:gsub('\\','\\\\')..'"] = {'..
        'CameraSource = '..f(3, 4, 5)..', '..
        'CameraTarget = '..f(9, 10, 11)..', '..
    '},\n')
end

--读取模型镜头数据
local function get_model_cameras(name, buf)
    if buf:find('Camera "') and buf:find('FarClip ') and buf:find('NearClip ') then
        --MDL
        buf = buf:sub(buf:find('NearClip '))
        local data = {}
        for i = 1, 2 do
            local s = buf:find('Position {')
            local e = buf:find('},')
            if s and e and e > s + 10 then
                local v = buf:sub(s + 9, e)
                data[i] = v
                buf = buf:sub(e + 2)
            end
        end
        if #data > 1 then
            save_model_camera(name, data)
        end
    elseif buf:find('^MDLX') then
        --MDX
        local pos = (buf:find('CAMS'))
        if pos then
            local size, pos = string.unpack('I4', buf, pos + 4)
            if size % 120 == 0 then
                save_model_camera(name, {string.unpack('I4c80fffffffff', buf, pos)})
            end
        end
    end
end

function mt:on_full(w2l)
    --遍历模型
    for type, name, buf in w2l:file_pairs() do
        name = name:lower()
        if name:find('%.mdx$') or name:find('%.mdl$') then
            get_model_cameras(name, buf)
        end
    end

    --生成模型镜头列表
    local buf = 'return {\n' .. table.concat(CameraModel) .. '}'
    w2l:file_save('scripts', path_script, buf)

    --生成log文件
    if create_log then
        Log(buf)
        Log:save()
    end
end

return mt
