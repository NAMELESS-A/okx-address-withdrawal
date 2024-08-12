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
UQBCJTplzYnZeeAZOMqay4ZOEdN3o_EvJGWgf33IZc2JOjGS
UQDtRASJc0YQIMo-xVQBmWbPvdal100ZNBiZNBReZFNYLbp4
UQBR5N4PiHt2lmhSQcOmNR_SnffF9GnOp3iRvljM8QF-p_86
UQC3IXwsjTN6OPr1hZTKF9aYR29D7istWrP_WPIomGLMw2Cw
UQDMz5jtCGDC9xB2iLblmnneX0roJXSXi1V0Z_0EnOdpvgQC
UQDjGxoLaBj1qVS52NWrrFaXVQz-wnldr03OBOTeFwbcZStd
UQAksAayJoM2daI2PGAKQ00D9nqU6cb5kZ8YVqPcKC6hL29q
UQB91TbkrwpuyylWmHTU7sLrhj8y0PV7SvcGqipjj9370JPX
UQDaz1xzaEvGNw62C30M3NitCQbbiknADvGMMLraqSKdmGK9
UQDpKA3c0X9u82wRp0IT6_y6gVrZxCuvB0Mm8aFfBy24jse-
UQBP7qwaRJtrsA26T2RgweL_eq1pCiEqkdiABwX_YtUSIXf9
UQChK3FT-f5Hr-PboVOGEwrhF2OiMNj0CuOgAQj0peym0_dI
UQCMSpQ1bfF5Ul6XHFNoSNkXhE_-jFOsqvbzYjoiX74lCotl
UQDOLC9_ya1gVaXLDLOtSKpgc_-H14_6yCa3jwKc-zS0zHp0
UQDVzuEoAKeNgbhTq9B8qP33jKgvpchWRqFYlmAvGbBIGNFc
UQCof69Q23l-QLdjbQ4paR1cJ_dyYMW_Zd4I_xghvWe2wr-J
UQCDjFtEmb24NOD6ltIO5eHV76QbMF3OOCW7VLelYBmWS8Rc
UQCyFMBxyH9Fdop14mIdpYJg1qKLaQKg0o_UcfkZ5Di1wthI
UQDdAggo-4YOXRaWJ9cLnEnH5VoHtTXBe6Wdl1GHg7alzb3l
UQCBfFksn8d-4fs4NTeJG1va5u6RYI8YKKtwlwDpdSwyC5QP
UQBcf80RF4Pxs_UwC2aTsQt1H_0O1XKSmX0BAXSTe-qnjQT-
UQCJR5AbqCiQr4ZMTyByHrOeM70KDT4qQuCwO-rPZYU3wrR5
UQCxNjXnwzre1U-uGoiOTqSBwY6EUwer--gRwVfd5prKzTTZ
UQCl_aIgjZibCN2dweqWHpxKTj5c8uUQv1DJYvsfMJEWHE0h
UQAAJJblqzOolo9b_RjA26BUHnawNrNT_L2dnWgtLZljaIR6
UQAl7JlU9yBBJKN0lWFTpXmip1GLeWaNrTSE-_QyMPpx3zuo
UQDC2tIK7OjJ9sBuNT_DD4db56sMB-8I9LqxBzWm4WRYramE
UQDTW9kxqaLDLYctOGec7mF04Y6gZY93E931T3YykVUbaEy_
UQDiwqcFPdCFj-aQuW_eD9A5StV_f3aBzJK0ZRVcZslql_Uk
UQDoxIQQum4LrLE9hDLm_4X88F3PQFj5-JoKhZOGlm4yVlD_
UQB6A6gpb15gj6b1ohqLWZUhHRQHaamXSmW2NgESzROCPBNg
UQCSJJNQM8SVAG5nO7LUgibMXhOCGrBc9HPZsTWX8Pp4wBM1
UQAJnSynLV8K7eE2-49mfTAs5764L8JhSxhKTArzMY3DR2os
UQA3eOZ5E_Yu-r-sxxI5kSfE9MO2N7bZj_qBBYQnJmEsT7bG
UQDIu-KnYzebSjMVUCdTyB5S8nT3eglGM39NFLemnWHqyX2Y
UQDoWgSH9RhpOKF3fyRJCNFNX1I164A0ijf3vOh_3b3jTeAN
UQAsZrGgV7TG5iqqUnqHBfDGwaGxsBdsIgfRAf5Fhp4G5hvO
UQD4n3li3d5Z5__ojeBg3bkPD0S62FtbIfbE1r8BdnzjYyjR
UQAhK3WE5oKzHzybS183qsfLv5c8eduNxjXolpMByOD30JJ4
UQC46xs26wNU7IPl3XOPZAjWlZ-c6pwc-sh3BQFa3wpQp_HL
UQDu-PvPvQyvsJFUbmeTr5X0bpGdVKMzdPjgmLp0KCFVbDbN
UQCb9tdaA4bC-vbywO2M-r22ElfwrW79MODQIMklJG1yIfK6
UQA_8djpazBQU1FbLSqQ09eTUAXnVa747HLHiOr5jcjJ9EvO
UQDpaq5krDaQbO91oWsDAgxtRIUkuWGS4FEw-wG3cO_XlA9b
UQBloH_pAD52O08TFtUJCKfjEpJa34lPvx6dV6-MuByZfP7G
UQBl56ozKrmre1L8ttym1oSljz-VS6QmxI3o_5asGjG_6nUB
UQB81pikcDlr-h8DUUgKhhl48KYTHkEEL2ZUxSUiM1utkDx7
UQCuKtFl7yxxOHs_S1LhwTL9rDRw_RE5lo5T2RUnc0ajm7Pl
UQDZj_Bp3aXSfg3byUwv5rs1pgHKQRd-fgd8abOQd-JLGP-Y
UQA6V__Ae9dM_VfMqKlnTP4qlt_4HOvDipyRyylkqldjI-I
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
