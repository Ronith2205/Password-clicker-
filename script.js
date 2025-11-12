@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

body {
  background: radial-gradient(circle at 30% 30%, #111 0%, #000 100%);
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.container {
  text-align: center;
  width: 90%;
  max-width: 400px;
  padding: 30px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  backdrop-filter: blur(20px);
  box-shadow: 0 0 40px rgba(0, 255, 150, 0.2);
  animation: fadeIn 1s ease-in-out;
}

.title {
  font-size: 1.8rem;
  background: linear-gradient(90deg, #00ffaa, #00ccff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.subtitle {
  color: #aaa;
  font-size: 0.9rem;
  margin-top: 5px;
  margin-bottom: 20px;
}

.generator label {
  display: block;
  margin-bottom: 6px;
  font-size: 0.9rem;
  color: #ccc;
}

#length {
  width: 100%;
  padding: 10px;
  border-radius: 8px;
  border: none;
  outline: none;
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  text-align: center;
  font-size: 1rem;
  margin-bottom: 15px;
}

#generateBtn {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 8px;
  background: linear-gradient(90deg, #00ffaa, #00ccff);
  color: #000;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s;
}

#generateBtn:hover {
  transform: scale(1.05);
}

.outputBox {
  display: flex;
  margin-top: 15px;
}

#result {
  flex: 1;
  padding: 10px;
  border: none;
  border-radius: 8px 0 0 8px;
  background: rgba(255, 255, 255, 0.1);
  color: #00ffaa;
  text-align: center;
  font-size: 1rem;
}

.copyBtn {
  padding: 10px 15px;
  border: none;
  border-radius: 0 8px 8px 0;
  background: #00ffaa;
  color: #000;
  font-weight: 600;
  cursor: pointer;
  transition: 0.2s;
}

.copyBtn:hover {
  background: #00ccff;
}

footer {
  font-size: 0.8rem;
  color: #aaa;
  margin-top: 25px;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(15px); }
  to { opacity: 1; transform: translateY(0); }
}
