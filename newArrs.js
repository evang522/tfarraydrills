const repeat = (fn,n) => {
    for (let i=1;i<=n;i++) {
        fn();
    }
}


const hello = () => {
    console.log('Hello World');
}

const goodbye = () => {
    console.log('Goodbye World');
}

repeat(goodbye, 50);