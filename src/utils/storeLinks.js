import AsyncStorage from "@react-native-async-storage/async-storage";

//buscar links salvos
export async function getLinksSave(key) {
  const myLinks = await AsyncStorage.getItem(key);

  let linkSaves = JSON.parse(myLinks) || [];
  return linkSaves;
}
//Salvar um link

export async function saveLink(key, newLink) {

    let linksStored = await getLinksSave(key);


    //conferir se o link já existe
    const hasLink = linksStored.some(link => link.id === newLink.id);

    if(hasLink){
        console.log('O link já existe');
        return
    }
    linksStored.push(newLink);
    await AsyncStorage.setItem(key, JSON.stringify(linksStored))
    console.log('link salvo com sucesso')
}
//deletar um link
export async function deleteLink(links, id) {

    let myLinks = links.filter((item) => {

        return (item.id !== id)
    })
    await AsyncStorage.setItem('youtubelink', JSON.stringify(myLinks));
    console.log('Link deletado do Storage')

    return myLinks
}
