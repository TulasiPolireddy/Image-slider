* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body {
  background-color: #0f172a;
  color: #fff;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.slider-container {
  width: 100%;
  max-width: 900px;
  background-color: #1e293b;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
}

/* Toolbar */
.toolbar {
  display: flex;
  justify-content: space-between;
  padding: 12px 16px;
  background-color: #0f172a;
  border-bottom: 1px solid #334155;
}

.toolbar button {
  background: #334155;
  color: white;
  border: none;
  padding: 8px 12px;
  margin-right: 5px;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.2s;
}

.toolbar button:hover {
  background: #475569;
}

.toolbar button.danger:hover {
  background: #ef4444;
}

/* Main Viewport */
.image-viewport {
  position: relative;
  width: 100%;
  height: 480px;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

#mainImage {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  transition: transform 0.2s ease-out;
}

.nav-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.6);
  color: white;
  border: none;
  font-size: 20px;
  padding: 14px 18px;
  cursor: pointer;
  border-radius: 50%;
  transition: 0.3s;
}

.nav-btn:hover {
  background: rgba(255, 255, 255, 0.8);
  color: black;
}

.prev { left: 15px; }
.next { right: 15px; }

.image-counter {
  position: absolute;
  bottom: 12px;
  left: 15px;
  background: rgba(0,0,0,0.6);
  padding: 4px 10px;
  border-radius: 20px;
  font-size: 13px;
}

/* Thumbnails */
.thumbnails {
  display: flex;
  gap: 10px;
  padding: 12px;
  overflow-x: auto;
  background: #0f172a;
}

.thumbnail-item {
  width: 70px;
  height: 50px;
  border-radius: 6px;
  cursor: pointer;
  object-fit: cover;
  opacity: 0.5;
  border: 2px solid transparent;
  transition: 0.2s;
  flex-shrink: 0;
}

.thumbnail-item.active {
  opacity: 1;
  border-color: #38bdf8;
}

/* Add Image Controls */
.add-image-panel {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 15px;
  background-color: #1e293b;
  border-top: 1px solid #334155;
}

.add-image-panel input[type="text"] {
  flex: 1;
  min-width: 200px;
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #475569;
  background: #0f172a;
  color: white;
  outline: none;
}

.add-image-panel button,
.upload-btn {
  background: #2563eb;
  color: white;
  border: none;
  padding: 10px 16px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.add-image-panel button:hover,
.upload-btn:hover {
  background: #1d4ed8;
}
