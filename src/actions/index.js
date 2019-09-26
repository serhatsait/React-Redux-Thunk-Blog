import axios from 'axios';//link atmak için axios kullanılıyor

export const fetchPostList = () =>
  async (dispatch) => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    //await kullanma sebebi, cevap gelene kadar response'da beklesin,cevap geldikten sonra response'a atsın.

    dispatch({ type: 'FETCH_POST_LIST', payload: response.data });
  };


export const fetchUserList = () =>
  async (dispatch) => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');

    dispatch({ type: 'FETCH_USER_LIST', payload: response.data });
  };


//action'lar js objesi döner. objenin içinde type parametresi olması gerekiyor.

//istek atmak istiyorsak bir fonksiyon dönüp cevap almasını beklememiz gerekiyor