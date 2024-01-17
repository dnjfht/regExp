const str = `
010-1234-5678
thednjfht@gmail.com
https://www.omdbapi.com/?apikey=56d328e5&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
http://localhost:1234
동해물과 백두산이 마르고 닳도록
`;

const regexp = new RegExp("the", "");
// new RegExp = /the/
console.log(str.match(regexp));
// match() 메서드는 문자열이 정규식과 매치되는 부분을 검색.

// ['the', index: 112, input: '\n010-1234-5678\nthednjfht@gmail.com\nhttp://www.omdbapi…ck brown fox jumps over the lazy dog.\nabbcccdddd\n', groups: undefined]
// 0 : "the", groups :  undefined, index : 112, input : "\n010-1234-5678\ndnjfht@gmail.com\nhttp://www.omdbapi.com/?apikey=56d328e5&s=frozen\nThe quick brown fox jumps over the lazy dog.\nabbcccdddd\n", length : 1
// the라는 단어를 찾아서 배열 데이터로 만들어줌.

// 만약 str 안에서 the라는 모든 단어를 찾아서 배열 데이터로 만들고 싶다면
// 정규 표현식을 생성하는 생성자 함수의 두 번째 인수로 g라는 옵션을 추가해주면 됨.

const regexp2 = new RegExp("the", "g");
// new RegExp2 = /the/g
console.log(str.match(regexp2));
// ['the', 'the']

// 그런데 여기서 대문자 T로 시작하는 The는 포함되지 않았음.
// The는 이 패턴에 일치하지 않았기 때문에 검색되지 않은 것.
// 만약 대문자, 소문자 가리지 않고 해당하는 패턴으로 검색을 하고 싶다고 하면 옵션 부분에 i 옵션을 추가해주면 됨.

const regexp3 = new RegExp("the", "gi");
// new RegExp3 = /the/gi
console.log(str.match(regexp3));
// ['the', 'The', 'the']

// 결론, 기본적으로 우리가 원하는 패턴을 적어주고 그 패턴으로 검색을 어떻게 할 것인지에 대한 기본적인 옵션을 추가해주면 됨.

const regexp4 = /fox/gi;
console.log(regexp4.test(str));
// true

const regexp5 = /Seungmin/gi;
console.log(regexp5.test(str));
// false

console.log(str.replace(regexp4, "AAA"));
// 010-1234-5678
// thednjfht@gmail.com
// https://www.omdbapi.com/?apikey=56d328e5&s=frozen
// The quick brown AAA jumps over the lazy dog.
// abbcccdddd
// http://localhost:1234

console.log(str.match(/\./gi));
// ['.', '.', '.', '.']

// 정규표현식에서 마침표 기호 하나는 특정한 문자를 검색하는 일종의 패턴.
// 이 문장에서 마침표를 찾고 싶다고 .을 찍었는데 하나의 명령으로 동작하게 됨.
// 그렇기 때문에 이 .이 명령으로 동작하지 않고 일반적인 문자로 해석되라고 특정된 기호 앞에 백슬래시(\) 기호를 붙여줄 수 있음.

// 이스케이프 문자(Escape Character) : \(백슬래시) 기호를 통해 본래의 기능에서 벗어나 상태가 바뀌는 문자.

console.log(str.match(/\.$/gi));
// null

// . 뒤에 $를 하나 붙여주면, 이 $ 앞에 있는 하나의 단어로 그 해당하는 줄이 끝나는 부분을 찾아서 끝나는 부분을 일치시킨다는 뜻.
// 하지만 이렇게 하면, 맨 마지막 줄의 끝나는 부분만 놓고 판단을 하기 때문에 ` 기호 앞에는 .이 없어 null이 값으로 나오게 됨.

console.log(str.match(/\.$/gim));
// ['.']

// 그 대신 여러 줄을 놓고 판단할 수 있도록 플래스 m을 추가해주면, 5번째 줄 끝에 있는 .을 배열로 반환하게 됨.

console.log(str.match(/^t/gm));
// ['t']

// 각 줄의 시작점에 있는 t를 찾아서 배열로 반환.
// 여기 플래그 i를 추가하면 소문자, 대문자 가리지 않고 각 줄의 시작점에 있는 t를 찾아서 배열로 반환.

console.log(str.match(/^t/gim));
// ['t', 'T']

console.log(str.match(/./g));
// ['0', '1', '0', '-', '1', '2', '3', '4', '-', '5', '6', '7', '8', 't', 'h', 'e', 'd', 'n', 'j', 'f', 'h', 't', '@', 'g', 'm', 'a', 'i', 'l', '.', 'c', 'o', 'm', 'h', 't', 't', 'p', ':', '/', '/', 'w', 'w', 'w', '.', 'o', 'm', 'd', 'b', 'a', 'p', 'i', '.', 'c', 'o', 'm', '/', '?', 'a', 'p', 'i', 'k', 'e', 'y', '=', '5', '6', 'd', '3', '2', '8', 'e', '5', '&', 's', '=', 'f', 'r', 'o', 'z', 'e', 'n', 'T', 'h', 'e', ' ', 'q', 'u', 'i', 'c', 'k', ' ', 'b', 'r', 'o', 'w', 'n', ' ', 'f', 'o', 'x', ' ', …]
// 문자 데이터에 모든 각각의 글자들과 일치해서 그것을 배열로 반환.

console.log(str.match(/http/g));
// ['http']

console.log(str.match(/h..p/g));
// ['http']

// 이렇게 http의 tt 대신 ..를 넣어줘도 똑같이 http 배열이 나오게 됨.
// h로 시작하여 p로 끝나는 내용을 찾는 것임.
// 만약에 str 변수의 문자열 마지막 줄에 hxyp를 추가하면 ['http', 'hxyp'] 배열을 반환하게 됨.

console.log(str.match(/fox|dog/g));
// ['fox', 'dog']

// 두 개를 검색하고 싶은 경우에는 첫 번째 단어 뒤에 vertical bar(|)를 적어주고, 그 다음에 다음 단어를 명시하면 됨.

console.log(str.match(/https/g));
// ['https']

console.log(str.match(/https?/g));
// ['https', 'http']

// 그런데, https 문자열 뒤에 ? 플래그를 붙이면, s가 없거나 s가 있을 때 모두를 찾아서 배열로 반환.

console.log(str.match(/d{2}/));
// d가 두 개 연속으로 일치하는 것을 하나 찾아서 배열로 만듦.
// ['dd', index: 136, input: '\n010-1234-5678\nthednjfht@gmail.com\nhttps://www.omd…r the lazy dog.\nabbcccdddd\nhttp://localhost:1234\n', groups: undefined]

console.log(str.match(/d{2}/g));
// ['dd', 'dd']

console.log(str.match(/d{2,}/g));
// d가 2개 이상의 연속으로 일치하는 것을 모두 찾아서 배열로 만듦.
// ['dddd']

console.log(str.match(/d{2,3}/g));
// d가 2개 이상, 3개 이하의 연속으로 일치하는 것을 모두 찾아서 배열로 만듦.
// ['ddd']

console.log(str.match(/\w{2,3}/g));
// \w 이 부분은 기본적으로 숫자를 포함한 영어 알파벳을 의미함.
// 숫자를 포함한 영어 알파벳이 2개 이상, 3개 이하 연속으로 일치하는 것을 모두 찾아서 배열로 만듦.
// ['010', '123', '567', 'the', 'dnj', 'fht', 'gma', 'il', 'com', 'htt', 'ps', 'www', 'omd', 'bap', 'com', 'api', 'key', '56d', '328', 'e5', 'fro', 'zen', 'The', 'qui', 'ck', 'bro', 'wn', 'fox', 'jum', 'ps', 'ove', 'the', 'laz', 'dog', 'abb', 'ccc', 'ddd', 'htt', 'loc', 'alh', 'ost', '123']

console.log(str.match(/\b\w{2,3}\b/g));
// 기본적으로 숫자를 포함한 영어 알파벳이 아닌 경계를 만들어줌.
// 숫자를 포함한 영어 알파벳이 2개 이상, 3개 이하 연속으로 일치하는 것을 모두 찾으려고 하는데,
// 그 앞뒤로 일반적인 알파벳과 숫자가 아닌 부분의 경계를 만듦.
// ['010', 'com', 'www', 'com', 'The', 'fox', 'the', 'dog']

console.log(str.match(/[fox]/g));
// f, o, x와 일치하는 것을 모두 찾아 배열로 만듦.
// ['f', 'o', 'o' ,'o', 'f', 'o', 'o', 'f', 'o', 'x', 'o', 'o', 'o', 'o']

console.log(str.match(/[0-9]/g));
// 0부터 9 사이의 일치하는 숫자를 모두 찾아 배열로 만듦.
// ['0', '1', '0', '1', '2', '3', '4', '5', '6', '7', '8', '5', '6', '3', '2', '8', '5', '1', '2', '3', '4']

console.log(str.match(/[0-9]{1,}/g));
// 0부터 9 사이의 일치하는 숫자가 하나 이상 연속되는 것들을 모두 찾아 배열로 만듦.
// ['010', '1234', '5678', '56', '328', '5', '1234']

console.log(str.match(/[가-힣]{1,}/g));
// 가부터 힣 사이의 일치하는 문자가 하나 이상 연속되는 것들을 모두 찾아 배열로 만듦.
// ['동해물과', '백두산이', '마르고', '닳도록']

console.log(str.match(/\w/g));
// 숫자를 포함한 영어 알파벳에 일치하는 것을 모두 찾아 배열을 만듦.
// ['0', '1', '0', '1', '2', '3', '4', '5', '6', '7', '8', 't', 'h', 'e', 'd', 'n', 'j', 'f', 'h', 't', 'g', 'm', 'a', 'i', 'l', 'c', 'o', 'm', 'h', 't', 't', 'p', 's', 'w', 'w', 'w', 'o', 'm', 'd', 'b', 'a', 'p', 'i', 'c', 'o', 'm', 'a', 'p', 'i', 'k', 'e', 'y', '5', '6', 'd', '3', '2', '8', 'e', '5', 's', 'f', 'r', 'o', 'z', 'e', 'n', 'T', 'h', 'e', 'q', 'u', 'i', 'c', 'k', 'b', 'r', 'o', 'w', 'n', 'f', 'o', 'x', 'j', 'u', 'm', 'p', 's', 'o', 'v', 'e', 'r', 't', 'h', 'e', 'l', 'a', 'z', 'y', 'd', …]

console.log(str.match(/\bf\w{1,}\b/g));
// 63개 문자에 일치하지 않는 문자 경계 다음에 f로 시작하는 영어 또는 숫자가 1개 이상 일치하고,
// (f로 시작하면서 아무 문자열이나 한 글자 이상 오는 단어이기 때문에 총 두 글자 이상을 의미함.)
// 63개 문자에 일치하지 않는 문자 경계로 마무리되는 것을 모두 찾아 배열을 만듦.
// ['frozen', 'fox']

console.log(str.match(/\d/g));
// 모든 숫자에 일치하는 것들을 모두 찾아 배열을 만듦.
// ['0', '1', '0', '1', '2', '3', '4', '5', '6', '7', '8', '5', '6', '3', '2', '8', '5', '1', '2', '3', '4']

console.log(str.match(/\d{1,}/g));
// 모든 숫자에 일치하는 것이 하나 이상 연속되는 것들을 모두 찾아 배열을 만듦.
// ['010', '1234', '5678', '56', '328', '5', '1234']

console.log(str.match(/\s/g));
// 공백(Space, Tab)에 일치하는 것을 모두 찾아 배열을 만듦.
// ['\n', '\n', '\n', '\n', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '\n', '\n', '\n', ' ', ' ', ' ', '\n']

const h = `  the hello  world    !

`;

console.log(h.replace(/\s/g, ""));
// thehelloworld!

console.log(str.match(/.{1,}(?=@)/g));
// .은 특정한 문자를 검색하는 패턴
// 즉, @ 앞 쪽에 있는 하나 이상 연속되는 것들을 모두 찾아 배열을 만듦.
// ['thednjfht']

console.log(str.match(/(?<=@).{1,}/g));
// @ 뒷 쪽에 있는 하나 이상 연속되는 것들을 모두 찾아 배열을 만듦.
// ['gmail.com']
