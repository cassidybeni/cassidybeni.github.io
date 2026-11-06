const skillFilter = document.querySelector("#select");
const skillGroups = {
    frontend: document.querySelector(".frontend"),
    backend: document.querySelector(".backend"),
};
const visibleGroupsByFilter = {
    "--": [],
    all: ["frontend", "backend"],
    frontend: ["frontend"],
    backend: ["backend"],
};

skillFilter.addEventListener("change", () => {
    const visibleGroups = visibleGroupsByFilter[skillFilter.value];

    for (const [groupName, groupElement] of Object.entries(skillGroups)) {
        groupElement.style.display = visibleGroups.includes(groupName) ? "inline" : "none";
    }
});