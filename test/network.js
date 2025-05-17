describe('network', function () {
  beforeEach(function () {
    eruda.show('network')
  })

  describe('request', function () {
    it('xhr', function (done) {
      $('.eruda-clear-xhr').click()
      util.ajax.get(window.location.toString(), function () {
        setTimeout(function () {
          expect($('.eruda-requests .luna-data-grid-node')).toHaveLength(1)
          done()
        }, 500)
      })
    })
  })
})
