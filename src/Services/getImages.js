import axios from 'axios'

const MY_KEY = '38888866-b532d9b8e62cbcdf24e4130f8'

export const getImages = async (value, page) => {
const {data} = await axios.get(`https://pixabay.com/api/?q=${value}&page=${page}&key=${MY_KEY}&image_type=photo&orientation=horizontal&per_page=12`);
return data
}