function removeDuplicate() {
    var uniqueName = []
    var numbers = [1, 1, 1, 1, 34, 3, 26, 67, 856, 2, 1, 7, 9];
    for (let i = 0; i < numbers.length; i++) {
        var element = numbers[i];
        var index = uniqueName.indexOf(element);
        if (index === -1) {
            uniqueName.push(element);
        }

    }
    console.log(uniqueName);


}
removeDuplicate();