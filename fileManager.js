// Esta forma de importação de biblioteca mostrado a seguir é chamado de CommonJS
// O professor disse que em aulas futuras vamos aprender a importar bibliotecas usando Module
import fs from "fs";
function createDirectory(dirPath) {
  return new Promise((resolve, reject) => {
    fs.mkdir(dirPath, { recursive: true }, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve(`Directory '${dirPath}' created successfully`);
      }
    });
  });
}

function createFile(filePath, content = "") {
  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, content, "utf8", (err) => {
      if (err) {
        reject(err);
      } else {
        resolve(`File ${filePath} created successfully`);
      }
    });
  });
}

function listFiles(dirPath) {
  //Retona uma Promise que resolve com a Lista de arquivos
  return new Promise((resolve, reject) => {
    fs.readdir(dirPath, (err, files) => {
      if (err) {
        reject(err); //Rejeita a Promise em caso de erro
      } else {
        resolve(files); //Resolve a Promise com a lista de arquivos
      }
    });
  });
}

function readFile(filePath) {
  //Retona uma Promise que resolve com o conteúdo do arquivo
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        reject(err); //Rejeita a Promise em caso de erro
      } else {
        resolve(data); //Resolve a Promise com o conteúdo do arquivo
      }
    });
  });
}

function writeFile(filePath, content) {
  //Retona uma Promise que resolve com o conteúdo do arquivo
  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, content, "utf8", (err) => {
      if (err) {
        reject(err); //Rejeita a Promise em caso de erro
      } else {
        resolve('File written successfully'); //Resolve a Promise indicando sucesso
      }
    });
  });
}

function deleteFile(filePath) {
  //Retona uma Promise que resolve quando o arquivo é deletado
  return new Promise((resolve, reject) => {
    fs.unlink(filePath, (err) => {
      if (err) {
        reject(err); //Rejeita a Promise em caso de erro
      } else {
        resolve('File deleted successfully'); //Resolve a Promise indicando sucesso
      }
    });
  });
}
export default { createDirectory, createFile, listFiles, readFile, writeFile, deleteFile };
