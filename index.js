(async () => {
// 在打开新增提现地址的弹窗之后，将以下代码粘贴到浏览器的控制台中并按回车执行。
// 请按照一行一个的格式输入你想要添加的地址，每次操作最多支持添加20个地址。
  const sleep = (delay = 1000) => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve()
      }, delay)
    })
  }

  let addrs = `
UQAZYln87qfiD5OEHEiZwam_wiDkpW8x60IqPEzm3-o7jC9g
UQDR-thgTPjRGATV-bZQYJaL3fZxzMBDqLV6fhzl5leQD1q0
UQCOKCt4Ml1IXXuxApOw4tBVKCI-bJbFSzllBvSXm0ZY8zkp
UQAgF2BrW-lT9dro5Tq5Yphn3ymTTl4msi9ySJ5RL9UVw9Il
UQBxboEAzL9tp70V6lImzQah1Nm7ItSnxxScrdMscG83SMqD
UQDnf9vsQVZwQdmreeshFaiDDu5pDP_geu_MDZe2l_DdMGJF
UQBn5wicDvCaNPCpi3SUG9W7V318KElB5H2Y6gOUlyCa6Sey
UQAI8-p9Pt9IyVH_8MaynhMn2RHBKbOaIuAk9GEBW1OcW6Lx
UQBeMx1Iysi72ivZ0xKZOXb4NZYaK0nknQvH0WJKpftQSBsd
UQBVQgLJLN0YUrtlZlWoW15jV99imeDmPHHBj1c-b_Q6CrJJ
UQAPMg2LZBvpwrGRKstFLQItuvx3qgy0EBySTzgtVpSQ6S3I
UQDw9MdKNFoGQR1nL6rhJyAaVFY5JEU3d6Ndcbvxdf0xo0IH
UQA4VlaXXeJGQ1yqbbA66F5dn3nggouczRul9rB9rzaYn4Hx
UQCViiy4u27IQubnVbYMxRAAGkR2iD55qFGe525Zl-9rZg5O
UQC7TQJj4aizJJnqLKzebsMEK9GhlWaL8DydoPXMownmhZ7-
UQCo6jIMo6VyBpzzQJVnCRCkMLzM1CBT7a7eQ7YyY-38ci83
UQCOR26POaEhDbYfoIOwqndID5dGUvQwLskJhoiN48-KUUK_
UQAIYPsgRnSy1s7ni4DaoabHuykr89vAfUduehJkTmy8afPK
UQCSqr9bUQYih219LKJ8brRFRju_dLAutbfKC3yRYo93xPiA
`
  addrs = addrs.split('\n').map(el => el.trim()).filter(Boolean);
  const nodes = document.querySelectorAll('.balance_okui-table-tbody .addressInputItem .balance_okui-input-input');

  const addBtnCoinTool = document.querySelector('.btn-outline-secondary');
  const placeholderValue = nodes[0].placeholder;

  for (let i = 0; i < addrs.length - 1; i++) {
    await sleep(500)
    addBtnCoinTool.click()
  }

  setTimeout(() => {
    const inputs = document.querySelectorAll(`input[placeholder="${placeholderValue}"]`);
    console.log(inputs, 'inputs');

    addrs.forEach((el, i) => {
      const input = inputs[i];
      console.log(input, 'input');
      const latestValue = input.value;
      input.value = el;

      const event = new Event('input', { bubbles: true })
      event.simulated = true;
      const tracker = input._valueTracker;

      if (tracker) {
        tracker.setValue(latestValue)
      }
      input.dispatchEvent(event)
    })
  }, 1000)
})();
