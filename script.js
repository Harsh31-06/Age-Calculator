function calculateAge() {
  let birthdate = document.getElementById("birthdate").value;
  if (!birthdate) {
    document.getElementById("result").innerText = "Please select your birthdate!";
    return;
  }
  
  let today = new Date();
  let birth = new Date(birthdate);
  
  let ageYears = today.getFullYear() - birth.getFullYear();
  let ageMonths = today.getMonth() - birth.getMonth();
  let ageDays = today.getDate() - birth.getDate();
  
  if (ageDays < 0) {
    ageMonths--;
    let prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    ageDays += prevMonth.getDate();
  }
  
  if (ageMonths < 0) {
    ageYears--;
    ageMonths += 12;
  }
  
  document.getElementById("result").innerText =
    `You are ${ageYears} years, ${ageMonths} months, and ${ageDays} days old.`;
}
