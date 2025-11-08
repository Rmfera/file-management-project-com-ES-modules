import fileManager from "./fileManager.js";
import readlineSync from "readline-sync";
import path from"path";
import url, { fileURLToPath } from 'url';

async function main() {
  //Como o professor está usando Es module para fazer os imports precisou desta linha de código a seguir
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  // O professor disse que esta linha de código abaixo é para evitar de pedir para o usuário criar uma pasta na mão
  const baseDir = path.join(__dirname, "my_files");
  fileManager.createDirectory(baseDir);
  while (true) {
    console.log("\nMenu:");
    console.log("1. Criar arquivo");
    console.log("2. Listar arquivos");
    console.log("3. Ler arquivo");
    console.log("4. Escrever arquivo");
    console.log("5. Deletar arquivo");
    console.log("6. Sair");

    const choice = readlineSync.question("Escolha uma opção: ");

    try {
      switch (choice) {
        case "1":
          const fileName = readlineSync.question("Digite o nome do arquivo: ");
          const fileContent = readlineSync.question(
            "Digite o conteúdo do novo arquivo ou deixe em branco:"
          );
          // O comando abaixo vai juntar o diretório do seu projeto com o nome do arquivo digitado aqui. ex: dir/text.txt
          const createFilePath = path.join(baseDir, fileName);
          const fileMessage = await fileManager.createFile(
            createFilePath,
            fileContent
          );
          console.log(fileMessage);
          break;
        case "2":
          const files = await fileManager.listFiles(baseDir);
          console.log("Arquivos no diretório:", files);
          break;
        case "3":
          const readFilename = readlineSync.question(
            "Digite o nome e extensão do arquivo:"
          );
          const readFilePath = path.join(baseDir, readFilename);
          const content = await fileManager.readFile(readFilePath);
          console.log("Conteúdo do arquivo:", content);
          break;
        case "4":
          const writeFilename = readlineSync.question(
            "Digite o nome do arquivo: "
          );
          const writeFilePath = path.join(baseDir, writeFilename);
          const newContent = readlineSync.question(
            "Digite o conteúdo a ser escrito: "
          );
          const messageWrite = await fileManager.writeFile(
            writeFilePath,
            newContent
          );
          console.log(messageWrite);
          break;
        case "5":
          const deleteFilename = readlineSync.question(
            "Digite o nome do arquivo: "
          );
          const deleteFilePath = path.join(baseDir, deleteFilename);
         const messageDelete =  await fileManager.deleteFile(deleteFilePath);          
          console.log(messageDelete);
          break;
        case "6":
          console.log("Saindo...");
          return;
        default:
          console.log("Opção inválida. Tente novamente.");
      }
    } catch (err) {
      console.log(err);
    }
  }
}
main();
