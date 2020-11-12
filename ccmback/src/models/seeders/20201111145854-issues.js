'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let datas = [];
    for(let i = 0; i < 10; i++){
      let obj = {
        num: i,
        title: "피보나치 함수",
        level: i,
        category: "stack",
        writer: "testUser" + i,
        desc: "어떤 수 X가 1보다 큰 제곱수로 나누어 떨어지지 않을 때, 제곱ㄴㄴ수라고 한다. 제곱수는 정수의 제곱이다. min과 max가 주어지면, min과 max를 포함한 사이에 제곱ㄴㄴ수가 몇 개 있는지 출력한다.",
        restric:[
          JSON.stringify({"id":1, "cont":"시간 제한: 2초"}),
          JSON.stringify({"id":2, "cont":"메모리 제한: 512MB"}),
        ],
        ioexam:[
          JSON.stringify({"id":1, "input":"1 10", "output":"7"}),
        ],
        accuracy: 0.5,
      }
      datas.push(obj)
    }

    return queryInterface.bulkInsert('issues', datas, {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('issues', null, {});
  }
};
