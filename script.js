let albertEinstein = new XMLHttpRequest();
albertEinstein.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        let albertInfo = JSON.parse(this.responseText);
        document.getElementById("albertBio").innerHTML = albertInfo.bio;
        document.getElementById("albertName").innerHTML = albertInfo.name;
        document.getElementById("albertDOB").innerHTML = albertInfo.birthday;
    }
};
albertEinstein.open("GET", "einstein.json", true);
albertEinstein.send();