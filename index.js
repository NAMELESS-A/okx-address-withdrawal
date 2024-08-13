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
UQAqkgrRdf-RUPy77LD3x_qDwh7_D5WQHBH7cpcPL_wbVc-e
UQBu2xCE2c82IcnToveAlBl9rThuiJqVlvW7aIJlucLJ0i9_
UQAtPIJWgTViEH_C-nj0Bn5Qy39PZDr1c9m2ODdeFPdKhOSH
UQC0DHupneAxwuztMg0I9nPEbEK2TD6QxhjVNT5aZARbwq8_
UQBWAqGcvQfgYMNG57mbUxH8cJ07VturafzezV_003TPIRBB
UQCybl5juUdyuoZ_GsZ_msoONpZ5YhwmcEYb8M_HNYIVaiRB
UQANHb8bMLAyIUWcQnLLne7GsK2Dciqz0lI6nL6FQ7nbCouo
UQA-YBvtzL-xqIH6SLuh2lsBo5u7CgYKjEG8zrc7VpXYxAhF
UQCMa53LPM3HnGfiz9RB3JxUbDfM2offDpK8V2LmV8qctaG0
UQAUT9ilrBUoWvPaXS_wdgVV9hAKEYg-golMLKJG1YP0oA8-
UQAcGjXRLd4nrvZjU3emNwd9Z3xT0bx5S5TmRe9dBhgiBk7I
UQA8WoN4_AGpm0ywigZ91cws644NTSoRHhSoshJn0LgZAgLZ
UQAtsggp9rzbeI41hHnPLXraq0GfaD3gtXvbWXo2d1LyS4Nf
UQDQ1y7QZj4oQiNQ9W0LsEOK_fphD1W8lvSVsiH-FV9tS71_
UQAQy2wtAf8akt0N0YzsZjej2MgekWUdz4CS_QbADsG2CP7G
UQDWIWFIT0IylF9kXbuW6exfCDMTNDAZLrRIYbIVGFhKuVAf
UQAYnR3FyXmmxzeckAZnwXzXxmFRzuOgDJkstS6eSjZSBVAI
UQB-WEtZIRzMhkjtl8bA5R1YGhIRJZ8v2JHRcymMVLyDhCH0
UQBNQhajT6gK-1PEDVt8Ac-HcrYixF7Cc2v_RoDRCg4yGEUm
UQAEXHDfmN1MKWwYEv9d7EmWrrnkEjmQkFXulHxIa-TcffY_
UQAzYK98j4UB4gNSHEfmCuCPe0kbwtLviUiLi2VOl0vBCIhd
UQCvf9wBgleUWQkBdtNGaWW4zEiur9cchhigtn8C7b8_pNKq
UQBZO_Sb6pIPmQ3RuEyTlTKSR2CVHWi8p7Az2UsUP6S5Bhhb
UQAnPLtbY-ULeuoz2j1-3oSPr_pOrqBVxEfPg57LSXvtOeNx
UQCpdgEVMDR1odiY1vLh2PaCtMlpmJEUvHn6bN26QvBLtmK8
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
