script_name("HaloCommand")
script_author("Ran Da")

function main()
    repeat wait(0) until isSampAvailable()

    sampRegisterChatCommand("halo", function()
        sampAddChatMessage("{00FF00}hallo", -1)
    end)

    while true do
        wait(0)
    end
end
