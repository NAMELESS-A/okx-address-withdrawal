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
UQDdCGpNl3ioBmec9X_8tkCbfLmmAfmE4zFG_3ZomvrbDBCx
UQC_jk4z0W1ZNEZRfWs4r0pc7hsk9lTYq9KVcveAuHuBG7aQ
UQBdyYEmd7G1RGZAFu1zH0B8mlO_x0le3lFoPfJqe1TkBaNY
UQCSaXqOyRc3CzbMUT9A9jnD-JSE1YQ3unUvjUZrJgya5ri0
UQBf337Mpter8XSHcDWI9aCUGz24S9mAMHD8sWVA_d_ugYOH
UQDq0R0qFxlE4VUFet9OzzAqmm3ruPBCs0FgFUxmx6DhmeZ2
UQD1JTWm7bJYT8OFg3uyRHB9U7NVWUWpd8cFhRKpcAsg_i-0
UQBuqMxDBISFE0nT4ejp1S3a2Zj5wCe-tE0pWcKTRTwhC0qr
UQAQ8AY1Uvb-2DNWsGLpMP9EFgsWXsYfJsgofcMR4XtfVTpv
UQBuI7H3gkyGPKUeGMX_rBJh5DobZkqppN0TeOtW_xguVZ21
UQCroGApBAJ-uN8NFMDnuCr_IO9kV0760wn8WaWy2U-ElsK-
UQBxPa9vNgIMK3qd4n-RzDhWiBR3XfRLXaxr9-_QUZ3-ED_H
UQDISVENym1Ym0x3hEhowNoVggj250xxZUzeYiPwKPk1BVwE
UQBvaLJChcbp-ei09cS7FbAvF0FYaf9fzQm96kWERAJXD6FR
UQAPDht1PnUTTVK3lWdym1udgDBX1WvtqbC_tYETWkf1MCWc
UQAcPilWaC8VbP8necLHn8VUY6RRaT-x_SDfWTLpXw9SOgem
UQDbPc665fvLGzKdzpRtuWmevJcw7uOfpzKAUKlf3AHaFV6P
UQC6gpj7nD0EHE0UsahtogI0M9l0iPNGXPnXncmGi2i7w7ap
UQCZDlyrc2K-Ct0sVFCTIUMgL0LteU-Y9npDFcFQN1i1PW7k
UQBEAClNWHlns1eh4d13rcUl7xzgmVDBjwe6dgZAOx5KOPx3
UQBdarKlbpdVkyiwlBux8ztBQzS0XwXqJyM8iwRS2iTt8o1_
UQC01ye90rRMWRt96ATNH_POF7tkjKhzniYnQ3Z5vAichT7y
UQDtpPfZOarew5FYdw9fkyd2qIoClYG_ysu_nbZiwvBdOenf
UQDBv6tX-qVhMkC6grclF-Tod4jzmZNuCvd3K4KcpYDy9iNd
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
