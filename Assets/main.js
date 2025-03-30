let data = {};

const step_1 = {
  first_name: "",
  last_name: "",
  other_name: "",
};

const step_2 = {
  email_address: "",
  phone_number: "",
  country_: "",
  state_: "",
  home_address: "",
};

const step_3 = {
  password_: "",
  r_password_: "",
};

const f_name = document.getElementById("f_name");
const l_name = document.getElementById("l_name");
const o_name = document.getElementById("o_name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const country = document.getElementById("country");
const state = document.getElementById("state");
const address = document.getElementById("address");
const password = document.getElementById("password");
const r_password = document.getElementById("r_password");

const next_2 = document.getElementById("next_2");
const next_3 = document.getElementById("next_3");
const done = document.getElementById("done");

const step1 = document.querySelector(".step-1");
const step2 = document.querySelector(".step-2");
const step3 = document.querySelector(".step-3");
const banner = document.querySelector(".banner");
const form = document.querySelector(".form");

const count = 100;
const pro = document.querySelector(".pro");
const pros = document.querySelector(".pros");
const step_num = document.querySelectorAll(".step-num");

next_2.addEventListener("click", moveToStep2);
next_3.addEventListener("click", moveToStep3);
done.addEventListener("click", submitForm);

function moveToStep2() {
  if (f_name.value === "" || l_name.value === "") {
    alert("first name and last name is require");
  } else {
    step_1.first_name = f_name.value;
    step_1.last_name = l_name.value;
    step_1.other_name = o_name.value;

    makeProgress(1);

    step1.classList.add("none");
    step2.classList.remove("none");

    for (let index = 0; index < count; index++) {
      setTimeout(() => {
        pro.style.width = `${index}%`;
      }, index * 8);
    }
  }
}

function moveToStep3() {
  if (email.value === "" || phone.value === "") {
    alert("Email and phone number are required.");
  } else {
    step_2.email_address = email.value;
    step_2.phone_number = phone.value;
    step_2.country_ = country.value;
    step_2.state_ = state.value;
    step_2.home_address = address.value;

    makeProgress(2);

    step2.classList.add("none");
    step3.classList.remove("none");

    for (let index = 0; index < count; index++) {
      setTimeout(() => {
        pros.style.width = `${index}%`;
      }, index * 8);
    }
  }
}

function submitForm() {
    if (password.value !== r_password.value) {
        alert("password do not match")
    }else{
        step_3.password_ = password.value;
        step_3.r_password_ = r_password

        form.classList.add("none");
        banner.classList.remove("none");

        // alert("Form submitted successfully")

        data = {...step_1, ...step_2, ...step_3};

        console.log(data);

        storeData(data);
        
    }


}

function makeProgress(step) {
  step_num.forEach((e, i, a) => {
    const textContent = e.textContent;

    if (textContent == step) {
      e.style.backgroundColor = "rgb(29, 182, 29)";
      e.style.color = "#fff";
    }
  });
}

function storeData(data){

  localStorage.setItem('userInfo', JSON.stringify(data));

}
