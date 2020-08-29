import axios from 'axios';

export async function getImage(width: string, height: string) {
    return await axios.get(`https://picsum.photos/${width}/${height}/?blur=1`);
    
}