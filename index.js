let array = [2, 4, 5, 1, 453, 43, 32, 1234, 12, 213, 12, 342, 3]
let pos = array.length
let lockedpos = 1
let comparisions = 0
let tempVar = 1
let sorted = false
const leng = array.length

while (lockedpos <= leng)
{
    // console.log(array)
    // console.log(lockedpos)
    // console.log(' ')

    pos = lockedpos
    while (true)
    {
        if (array[pos-1] > array[pos])
        {
            tempVar = array[pos-1]
            array[pos-1] = array[pos]
            array[pos] = tempVar
            pos = pos - 1
            comparisions++
        }else
        {
            break;
        }
    }

    sorted = false
    comparisions++
    lockedpos = lockedpos + 1

}

console.log('СОРТИРОВКА ВСТАВКАМИ ЗАВЕРШЕНА!\nРЕЗУЛЬТАТ:\n' + array)
console.log('Выполнено операций: '+ comparisions)