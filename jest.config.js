module.exports = {
  setupFilesAfterEnv: ['jest-enzyme'],
  testEnvironment: 'enzyme',
  snapshotSerializers: ['enzyme-to-json/serializer'],
  moduleNameMapper: {
    style$: 'identity-obj-proxy'
  }
}
