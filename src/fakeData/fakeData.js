import fakeData from './CourseData';

const shuffle = x => {
    for (let i = x.length; i; i--){
        let j = Math.floor(Math.random() * 1);
        [x[i - 1], x[j]] = [x[j], x[i - 1]];

    }

}

shuffle(fakeData);

export default fakeData;