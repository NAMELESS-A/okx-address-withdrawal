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
UQA-Iu2-PHZwFDpnlTuua9WOJFX-Jq4ho6jjjszcEcn6zUGN
UQDikxk60ihg66P-VoVZOjGUsuOdfua-jWrTdv5FIW3Lz7eS
UQCQq0h2WCfwMG7vmQ0MwIVwNH9z-DW7NzhnDfouZLXkxLVA
UQD3xlPjDwn0SFfR4G6qOH2GgzyxnHNKVITdqe94PQbSFS7d
UQBHhbDI2aAEOys_SBmgMXg6WW31AyxusntmLTt8v-7KGZma
UQAT-Z6En_sO-f0JIME5Vn2dKh9a_WrwT4-aUr7XjgiVLHFk
UQBkMCZ5GHP6k7XJ2JUWErwiIsHzMyo7Z8J-gn7p7Taq0CPR
UQBAcU6nw0UnSB-zaOX3qMCIJKr3jB0kEMkXji6rQPR7VmxZ
UQA9Luxts9DxUKkEbHwBIo5bv0hGEez8lTxooKF_R6DMkpPR
UQDOVDtWTpAqrlPBLwVgchbGJwJkiKsyclTNSoUOJCB3sCwl
UQD18hyQAFnV8cI5Hc5dT7hgcWo8N3HlmEUtwDkb4xuCerZl
UQBM3ocLH4WmValmPcbPCFUONTLdZZV0RFP6TJUBAGRrN-5Z
UQA02ll5fdYOCcvBXGBzVnZHR0bJq9DWsdgHytjoFkSRG2AI
UQAxvVLAkAJ1PP0M7DC6RjeEIluu42SZffvpck7hy7fqG8uK
UQBPyIeD76xpAKfX7hMJqQ-aOfkM1b0rnhAbAQq7cGAYMg-Y
UQDu_ngHxybgpC--Q_k29fHE1hi2zryAaS7I6m7TuG-0Ak58
UQAFvF0uv13xbIEPwzwb76LCgdRLbej8v6176QO2Mm8APHyl
UQCTelgrJZaPqtXFfD7_LhlUqhtvCUCmIddSUdX2e4McuBrg
UQA-UNMzCkx5dNIGq3DmFSHVCeTXOCcAWrlx1e0TFbzRAS1t
UQCUcdBtbNi8xwWGd1gmCk6YEUBUlEefv8_lu4BKC--Dymy7
UQAk1rXCXS5TWzrZv5gCehtXi0C5aqZxo6mEb3D4I9XUTAFq
UQAmXWny3QTnaQqFanp78_X0xGMHY2iAQIn_cjG-XgDQhCLO
UQA4DR5q-97MW_QFpJfPWSAxqmCwxmqCuQe-7QmTDvEC8ctV
UQBNVWxaPgz3zkhyzQZAL4lIsKK7x8Ja4f-BoZFi0G-CuoUi
UQC2WXWyr2O_YT-MGKEbExWKkjPYehVA5-nXjvBXV4e_YPmx
UQAt5LSnyMkqWeNNsQYKC2LofRg1LzvYnuN-xoKkxa2APYTy
UQDhGGKRpKxfYRlQaU52vkUO-YuGUs0_kzj8zuYDSxsXf4jr
UQDo_Y-4-XpZe5pUJmB5CBZ85l6jXvLs2kNRlnrNndvhRtL1
UQA565EoHMZt4mXpkPD08AZLwdjWqcUXU9mVFHuJ_rJmNqTw
UQDOFnO0h-t5ZdR-SMeF70mIfdiPGidIRU5uyUrjKuXw-8wz
UQBRt4CQeCyTdIU1aQofpPQxcD1p6xrsIzS6Fr6Z1GJlf0mc
UQB7HCs0mdxpu8UCtnbDgSl3e8Q-wkocWnuFNHSyJjycq1hc
UQCrv4j0AlXaIyhARU1sFQyauq_B9uO4XeVuyY1Y2y_DzeY_
UQDnc0dqXZIsLzyqQ4nqXwrGRIZ6ctcnZMFDxTLIC1H_wyJV
UQBKnrUKtUd43sjt3ypo9DbCifIbMJQvPdNo1-RbjYHYeJ24
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
