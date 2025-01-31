function changeUTCTime() {
    const utcTime = new Date().toUTCString();
    document.querySelector('[data-testid="currentTimeUTC"]').textContent = utcTime.substring(0,25);
}
window.onload = changeUTCTime();


function showDetails(){
    const detailsButton = document.querySelector(".details")
    const shortBio = document.querySelector("[data-testid='shortBio']")

    function toggleShowDetails(){
        if(shortBio.style.display === "none"){
            shortBio.style.display = "block"
        }else{
            shortBio.style.display = "none"
        }
    }
    
    detailsButton.addEventListener("click", toggleShowDetails)
    
}
showDetails()


function toggleDarkModes(){
    const darkModeButton = document.querySelector(".dark")
    const fullName = document.querySelector('[data-testid="fullName"]')
    const title = document.querySelector('[data-testid="jobTitle"]')

    function toggleDarkMode(){
        if(darkModeButton.innerHTML == "Dark Mode"){
            darkModeButton.innerHTML = "Light Mode"
            document.documentElement.style.setProperty('--darkerBackground', '#8D0039')
            document.documentElement.style.setProperty('--cardBackground', '#534f4f')
            fullName.style.color = "white"
            title.style.color = "white"
        }else{
            darkModeButton.innerHTML = "Dark Mode"
             fullName.style.color = "#534f4f"
            title.style.color = "#534f4f"
            document.documentElement.style.setProperty('--darkerBackground', 'rgb(255, 105, 180)')
            document.documentElement.style.setProperty('--cardBackground', '#ffffffab')
        }
    }

    darkModeButton.addEventListener("click", toggleDarkMode)
}

toggleDarkModes()