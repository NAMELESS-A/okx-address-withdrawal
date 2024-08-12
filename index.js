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
UQDloICPe6hlZNxXT2sa_RVShpPIbDiSEZ2WVp-x9D7Hcze0
UQBEuEQ1EVNyRYUz9F2KdO9tEGSORnGppCygSB9y18yOpWSY
UQAVoO2FdLFpmqR6vYLonOrFHf_CyIsCSQSXzLB-iD2pChnZ
UQB3l_Av_nw1llRGDRPs0Go6InE-MdpIhe22T7y9rD9PxIEA
UQBKuLIo6oadjj5GkHojtRDvin3_3FQOeKhaKwBvz284k9Br
UQAcm83OTMZOn9-RO3ifoda6llGv9gfDNj4uCOfyw-0QbMnD
UQACCm4_EFOUf3Z-L7LXos9nwPANDAIRDW9k6Ac4jmnymXT0
UQD31gW94rlDh6NHySnwnzx3A6FRvf319fgc5_4iVt9fdw9D
UQBoJh30ZBtOpa15d_RGEnL_FsFmhFsjhgfPG7wUKLudH2sy
UQBkSlQbyEJu70I2nC00zblPa6-g_CE8z8En2dnpod0ij6SD
UQCZP911zWLt0KSZ4aK9F1Bg_T9pF-i7VMO693Z2hLsMx9A0
UQDhLTWonxK52SzSERNqf8cwatVwNGC2KZqL2uejtUcmpXnL
UQBBCjCHhDf3pNXUPqNhmZuNdQBhQyVR06JQFmlEjMJ_Wu1t
UQCCkwbzixJNIO53of_8EHyrilNdAHUMyvvY7iR7-q3KTdpB
UQBH6-UmEbUjt2C8lWVrEMKga6E46kiLFPjjD53F-uMJBTgA
UQDxZljIAPVps-KQefb-2AO4KkQRFCP1NwqjWfqhfEIbiQo3
UQD_EmyYjjc5F7ZugLNE0MdkhoCiYSZFAtxgbMI6WdbdKJyB
UQD6RPyICA5F-UyIqlFe9RrcZFT-DQgDdWnnnkSf4RqmWbQ9
UQDjmg2cAC3-QNeF2my0eTuzFmLlrNkH4vQr1JlS-fQBNzPJ
UQDqrqtmXN-LWF0cWrU9uLdTG-n9mAKs1qOyiZXuiEwkYA4d
UQCv8wyWf74Bl5Mb1DYAKEwTdr_BbavX3o1RvS5UCuScYIlf
UQABa_qB_DAhavP8FQS6tdDb5AnZM18kCuHCLD_IsN-BickQ
UQBM0pQQeEGkZCs384hMVVQjj_5gK6u3Oe530ZIIUz0uOrv_
UQBG8xgpd-xewWyAm1fVoaVGK4Hrj5dIw4HYKOR5JCostZON
UQCN4gl7NrvYo4_-QdL8g89DyObnbeDUhReUUdJAgav016xY
UQDLyXeVt78HJrG7dvMLlcFFjW9ooNKiAC7d112K6w2G0Fni
UQDbzA8eN7eOjpQodBBgasXXBLxRuiutwzAMac958ADC5fON
UQCfTK90LNNcwlYBCJMdeZxeaDkt7QcXddHzQ0PLUCUGc6wN
UQDia9hLS_N7m_z0u_GBtitq-W1CQyqzIUA0PQphmts406ur
UQBCMbUSFyiqcfERo909w5QGp_imeK1Zmx06XNh_Y71Gm20U
UQDvooYn2NDszCnHGdWBju7BgyPl_NxUlAif_J9FFJpJ-G8y
UQCNyn9N8xv9E0wiUsXt8EIcrzNJ6w1C0StDNmmUT6WGE8Lj
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
