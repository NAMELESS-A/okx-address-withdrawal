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
UQDbLRflZkFTDlNoKedHKsxGhhc4_BnqulooN3w2fRZ0E_R6
UQARPfBSdAG_HIgExRLcRLLFQyjaBRKOExUkyvEhQ7PxOCG_
UQCnawLzK6mcymNkfd-TQYBlvOkVmKA-TTyVDZBKjaVVlFMQ
UQBZffgCSRmlkSGEsdllYm-M9J4-JcjrrGMNTJxEzzdJBFwB
UQBcxZQKB5klwzPgIwZ6w4Fz6G5ME3jA8l6W8vKopqxc-o-U
UQBjTE8G_9sq4t73EuVyMsQ1DropLiFBe2gdbjXnTVFJbldX
UQDRaTOcZKJUsoe1BURXScNDSg-5SN8XTItdCuFokFg8aN5V
UQCunhShmKdfHvsvM_V7XnQ4-S8_Vxt0L-DtwfhvJm--AZxT
UQDaTn7lf_S-VfRhl9qsslQEl7-WFM5xEFw4KE6bRTrS5HJC
UQArzCvwr5UVVvWEUJGCTISpuLkYTfyDrLmn-TDPB3qsKYAi
UQBwupk3i53eRld6Vzvu8vG-wjPo_juX8iEaRGfjFvp35Q9I
UQDG-U89fZhwcqCEh5z-LsdvoFu4EEz0iG6wDVh2G6LrlXnP
UQA8V42wzPe56wEn4qp1E9V8wY5huhr6AcxyB559RzXQ6NIP
UQCMT51knHPsJKXqmomSNXtsZu6GpkIBg4x29CGxxExV1k6b
UQBBN4N7RMyVcdvd1HGodtm9V_1Ja1a4p5SzCjQvSmwy7ITz
UQAEpqt4AS88030YCgsTqnVHHLG1xIqbO-S2N2XaLBCktvd2
UQDMtlnsJZlKUvAmQgfYjCCF1CqNt1E58uGTMlwvXPWgcneV
UQDP7RgNTYjQMOIvn_wLpKkF0XKaNeFUgn7p8KMF7VkGOHhP
UQDxDAWgW37ctQeDcMtwN4aCVnS21Cm1lUueUXm4eJv989H5
UQC_mvw7ZA3DdNr1qK1MBIR-JKbWLYWS7wBqMNH_13m7fZ0A
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
