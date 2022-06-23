const posts = [
    { ad: 'görkem', soyAd: 'mgf', Dyer: 'Izmir' },
    { ad: 'görkem', soyAd: 'mgf', Dyer: 'Izmir' },
    { ad: 'görkem', soyAd: 'mgf', Dyer: 'Izmir' }];
console.log(posts);

let newpost =[
    {ad:'görkem',soyAd:'mgf',Dyer:'Izmir'}
];

const listPosts = (data) =>{
    return new Promise((resolve, reject)=>{
        console.log('postlar listeleniyor...');
        if(data){
            console.log('listeleme basarılı');
            resolve(posts);
        }else{
            reject('postlar listelenemedi!');
        }
    
    });
};

const addPost = (newpost) => {
    return new Promise((resolve, reject) => {
        console.log('post ekleniyor...');
        if (newpost) {
            posts.push(newpost);
            resolve('ekleme başarılı');
        } else {
            reject('ekleme başarısız!');
        }
    });
};
const processPost = async () => {
    try {

        let listedPosts = await listPosts(true);
        console.log(listedPosts);
        console.log('******************');

        let isAdded = await addPost(newpost);
        console.log(isAdded);

        listedPosts = await listPosts(true);
        console.log(listedPosts);

    } catch (err) {
        console.log(err);
    }
}

processPost();
