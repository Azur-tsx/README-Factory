document.getElementById("readmeForm").addEventListener("submit", function (e) {
    e.preventDefault()
    const form = e.target
    const data = Object.fromEntries(new FormData(form))
    const techs = Array.from(document.querySelectorAll('input[name="techs"]:checked')).map(cb => cb.value).join(", ")

    if (!data.contact.includes("@")) {
        alert("Veuillez entrer une adresse email valide.")
        return
    }

    const content = `
# ${data.emoji} ${data.pseudo} — ${data.bio}

> _"${data.quote}"_

## 🧠 À propos
${data.desc}

## 🔧 Technologies utilisées
${techs}

## 🧪 Projet préféré
[${data.favProject}](https://github.com/${data.pseudo}/${data.favProject.toLowerCase().replace(/\s+/g, '-')})

## 📬 Contact
${data.contact}

---


`
    const blob = new Blob([content], { type: "text/markdown" })
    const link = document.createElement("a")
    link.href = URL.createObjectURL(blob)
    link.download = "README.md"
    link.click()
})

document.getElementById("githubLink").addEventListener("click", () => {
    window.open("https://github.com/new", "_blank")
})