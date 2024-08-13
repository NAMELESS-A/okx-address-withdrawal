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
UQCWVl7m9DBT7PaUbn4pTZbpnjfMHy7Y-OpZeznMzkQm66lg
UQBOQz0PzK1gMlLkGQeEZM5osCg4PQ8TrYGsvi4CaIOhmvCC
UQB2S4uYcgNVYhPRRLxNHl3p9NpSUygzZKgqRTfj0DJfCRhF
UQAA0QBdK60xq88AYAruiffGCyg52dIp2mbZ3ijv_hyzKvJx
UQBtvR-HZucz-DueK7G2S4_sUFoNSw1_JKWOw9tntH_nad7e
UQCl9-PZdOPr5YWjBKyxtu4bfAnPfi-sWeuUkEETu62Nm2u9
UQDdQgXSSXf1O83eLa250j7QGoMsOsI7s37FczKwMxEwRTAi
UQA106XZt09BgmFVdR1G_gXgycLSlIhIi5EwJUqInOeNoUew
UQDhhrg7STw55pdMnqPx1PSQoXLweyBVyOQwpeqJ-VKMfhsI
UQAniFlitFhVzC2d-dGAxqcPm3VZTSHk3XpPcfmoOIYvw0MQ
UQC9us7FAE4ujoEvd-YsFzqafNvGIkUT1mhhdTS3pYBC5WSz
UQAGJt4gV4el_Kfj1Kzl668bygSqojEzB-sunQcfgVJRzEIu
UQAEpeIaxgDuPAnJ73piOeWDv-JnvQ6YBi27T21CW9YbzAHL
UQDWB0wDTGB_wFVZhlgzdoJY6A1J_x39BvU5xkR2OC0xRIlh
UQCGbyvnfJCVKrNc0NJWcpS0KcA4p5ZEzS9s-w62BIq2lOeR
UQAmWlANbtKnaOAHukwfotSIjIe2ULN3Q1lP37C8aUYyrqGg
UQACXf1kYbiNVUO788Rz18gtDWPiggS78gC9m2fb-PboIh5Z
UQCe7PexJHO5L3QNQAGkeSP_F6i5c5Cgp_P3XXCBpJApB6OU
UQAxPdZxG4QJmQhDm6TOHCe5Vkw2xzMfFBPri71iunv6Sph5
UQC0f7C31XUJ1Qu0u6lAvL5dUkfI12NkdAS5qekyQsYW5fT5
UQDSgV9-S_5c6Z2QwMDM7lt2GSuO84XPcQ1sFpwL16mR42DT
UQAPfx4j58KxPIyUUQEL7OG4xvH_HEdRAd9989igKJd2M6ns
UQC-UbIuWpxQ73MOrbgSVCGjgxE9q29mXSbO_YxXUb_LhdFI
UQDvo6eDB_EOu8Kll2OgANU2g2FkFzxOVYTqErq3J_mT8fSn
UQDtiA1mUKPfdRqfy8mTDV3CSrpeKaNTL6wkivWs6eVtgwy_
UQAztbGVAn10iS4Wcqq4KLquhrXzigC3DU-4vsN2WsJ2AZpT
UQARNQil_FpK8PC9ENpZ_lUhdyszOi1uPAkYSjk5SS8HVE5H
UQCPv9Xyd1sLLs0Ph_0kU-6E7aiYxpHxcCjZoBU2fgKJnQmX
UQB_doDb5pYihsXbgsqCAba2JO4zKlpReggUNVH9PtxZhqPG
UQAeG0G0qDtgthhbejDIhp1bY6llIc_8B-lZGibzk_sntcto
UQDcYRzK6tp4BTfSxSULDhzw_7ZOBDRnsIx_cQnDCkAsg5CS
UQAa4flWi2DSq4SP5JLS3Ly0wPzW86g8XZyUVXl4EV0U9dzF
UQAUyqlHkczecgBfFKxyi4yNfODdHcfkoIfGUXj3w2Om7I4p
UQBCC-qjuvn7GJYgrUAsp8HmpSyJwi5vJlJQjEWhYWJoCLFs
UQAHtlQeEW4a4yXBy8I9nonQ0ZeTUp0XJ5seHqp5O46TFt8Q
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
