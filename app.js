// Lista de keys válidas (teste local)
const validKeys = ["ABC123", "XYZ789"];

function getDeviceId() {
  let id = localStorage.getItem("deviceId");
  if (!id) {
    id = "dev-" + Math.random().toString(36).substring(2, 15);
    localStorage.setItem("deviceId", id);
  }
  return id;
}

const deviceId = getDeviceId();

// Auto-login se a key já estiver salva
const savedKey = localStorage.getItem("savedKey");
if (savedKey) {
  document.getElementById("keyInput").value = savedKey;
}

function verificar() {
  const key = document.getElementById("keyInput").value.trim().toUpperCase();
  const msg = document.getElementById("msg");

  if (!key) {
    msg.style.color = "red";
    msg.innerText = "Digite uma key!";
    return;
  }

  if (!validKeys.includes(key)) {
    msg.style.color = "red";
    msg.innerText = "Key inválida!";
    return;
  }

  // Salva a key localmente e redireciona
  localStorage.setItem("savedKey", key);
  msg.style.color = "green";
  msg.innerText = "Acesso liberado!";
  setTimeout(() => {
    window.location.href = "home.html";
  }, 500);
}
