function getSecondLargest(nums) {
    let max = -Infinity, secondLargest = -Infinity;

    for (const value of nums) {
        const nr = Number(value)

        if (nr > max) {
            secondLargest = max;
            max = nr;
            //[ secondLargest, max ] = [ max, nr ] // save previous max
        }

        else if (nr < max && nr > secondLargest) {
            secondLargest = nr; // new second largest
        }
    }

    return secondLargest;
}

function main() {
    const n = 10;
    const nums = [ 10, 9, 9, 8, 8, 11, 8, 0, 9, 1 ];
    console.log(getSecondLargest(nums));
}

main();