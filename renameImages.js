const fs = require('fs');
const path = require('path');

// Путь к директории с изображениями
const imgDir = path.join(__dirname, 'assets', 'img');

// Функция для переименования изображений
function renameImages() {
    // Чтение содержимого директории
    fs.readdir(imgDir, (err, files) => {
        if (err) {
            console.error('Ошибка чтения директории:', err);
            return;
        }

        // Фильтрация только файлов с изображениями (например, jpg, png, gif)
        const imageFiles = files.filter(file => /\.(jpg|jpeg|png|gif)$/i.test(file));

        // Переименование файлов
        imageFiles.forEach((file, index) => {
            const ext = path.extname(file);
            const newFileName = `img-${index + 1}${ext}`;
            const oldPath = path.join(imgDir, file);
            const newPath = path.join(imgDir, newFileName);

            fs.rename(oldPath, newPath, (err) => {
                if (err) {
                    console.error(`Ошибка при переименовании файла ${file}:`, err);
                } else {
                    console.log(`${file} переименован в ${newFileName}`);
                }
            });
        });
    });
}

// Запуск функции переименования
renameImages();
