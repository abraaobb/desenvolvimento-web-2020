let x = 1;
while (x <= 10) {
    document.write(`${x} <br>`);

    x++;
}

while (x <= 10) {
    document.write(`${x} <br>`);
    if (x == 5) {
        break;
    }
    x++;
}

while (x <= 10) {
    document.write(`${x} <br>`);
    if (x == 5) {
        continue;
    }
    x++;
}