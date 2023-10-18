const titles = ['Заголовок 1', 'Очень длинный заголовок во всей книжке', 'Заголовок 2'];

const pages = [10, 20, 123456789012345];

for (let i = 0; i < titles.length; i++) {

    const title = titles[i];
    const page = pages[i].toString(); 

    const maxLength = 20;
    const totalLength = title.length + page.length;

    if (totalLength <= maxLength) {
        console.log(title + '.'.repeat(maxLength - totalLength) + page);

    } else {
        console.log(title + '.' + page);
    }

}