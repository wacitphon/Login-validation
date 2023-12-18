const validateInput = (inputObj) => {
    const username = inputObj.username.trim();
    const password = inputObj.password.trim();
  
    if (username === '' || password === '') {
      alert('กรุณากรอกข้อมูลให้ครบทุกช่อง');
      markInvalidInput('username');
      markInvalidInput('password');
      return;
    }
  

    if (username.length <= 3 || /^\d/.test(username) || /\s/.test(username)) {
      alert('username ความยาวต้องมากกว่า 3 ตัวอักษร && ห้ามนำหน้าด้วยตัวเลข');
      markInvalidInput('username');
      return;
    }
  
 
    if (password.length <= 4 || !/\d/.test(password) || !/[a-zA-Z]/.test(password)) {
      alert('ความยาวต้องมากกว่า 4 ตัวอักษร &&  ต้องมีทั้งตัวเลขและตัวอักษร');
      markInvalidInput('password');
      return;
    }
  
    window.location.href = 'https://www.example.com'; 
  };
  
  const markInvalidInput = (inputId) => {
    const inputElement = document.getElementById(inputId);
    inputElement.style.borderColor = 'red';
  };
  
  // ตัวอย่างการใช้งาน
  const loginForm = document.querySelector(".login-form");
  
  const hdlLogin = (e) => {
    e.preventDefault();
    let allInput = loginForm.elements;
    let inputObj = {};
    for (let el of loginForm.elements) {
      inputObj[el.id] = el.value;
    }
    validateInput(inputObj);
  };
  
  loginForm.addEventListener("submit", hdlLogin);