
export function getFormattedAmount(amount) {
   return !isNaN(amount) ? Number(amount).toFixed(2) : "Given input is not a number";
}

export function getMinimalNumberOfNotes(amount) {

    if (isGivenAmountValid(amount)) {
        const AVAILABLE_NOTES = [100, 50, 20, 10];
        const notes = [];
        let note;
        let i = 0;

        while ((note = AVAILABLE_NOTES[i++]) && amount) {
            if (amount >= note) {
                for(let i=0; i< Math.floor(amount/note); i++) {
                    notes.push(getFormattedAmount(note));
                }
                amount %= note;
            }
        }
        return notes.length > 0 ? notes : '[]';
    }
}

export function isGivenAmountValid(amount) {


    if (amount % 10 !== 0) {
        throw new Error("We can not process you request. Please enter amount divisible by 10.");
    } else if (amount < 0) {
        throw new Error("You can not withdraw negative amount of money.");
    } else {
        return true;
    }
}