var assert = require('assert');
var spy = require('bondjs');
var proxyquire = require('proxyquire').noCallThru();

describe('v1 feature api controller', function () {
	describe('list action', function () {
		it('should send a 200 with a list of features', function () {
			var sendMock = spy();
			var statusMock = spy().return({ 'send': sendMock });

			var requestMock = {};
			var responseMock = { status: statusMock };

			var controller = proxyquire('../../../../src/api/v1/controllers/feature', {});

			controller.list(requestMock, responseMock);

			assert.equal(1, statusMock.called, 'status not called');
			assert.equal(true, statusMock.calledWith(200), 'status called with wrong code');
			assert.equal(1, sendMock.called, 'send not called');
			assert.equal(true, Array.isArray(sendMock.calledArgs[0]));
		});
	});
	describe('get action', function () {
		it('should send a 200 with a single feature', function () {
			var sendMock = spy();
			var statusMock = spy().return({ 'send': sendMock });

			var requestMock = {};
			var responseMock = { status: statusMock };

			var controller = proxyquire('../../../../src/api/v1/controllers/feature', {});

			controller.get(requestMock, responseMock);

			assert.equal(1, statusMock.called, 'status not called');
			assert.equal(true, statusMock.calledWith(200), 'status called with wrong code');
			assert.equal(1, sendMock.called, 'send not called');
			assert.equal(false, Array.isArray(sendMock.calledArgs[0][0]));
		});
	});
	describe('post action', function () {
		it('should send a 200 with the new feature', function () {
			var sendMock = spy();
			var statusMock = spy().return({ 'send': sendMock });

			var requestMock = {};
			var responseMock = { status: statusMock };

			var controller = proxyquire('../../../../src/api/v1/controllers/feature', {});

			controller.post(requestMock, responseMock);

			assert.equal(1, statusMock.called, 'status not called');
			assert.equal(true, statusMock.calledWith(200), 'status called with wrong code');
			assert.equal(1, sendMock.called, 'send not called');
			assert.equal(false, Array.isArray(sendMock.calledArgs[0][0]));
		});
	});
	describe('delete action', function () {
		it('should send a 204 with no content', function () {
			var sendMock = spy();
			var statusMock = spy().return({ 'send': sendMock });

			var requestMock = {};
			var responseMock = { status: statusMock };

			var controller = proxyquire('../../../../src/api/v1/controllers/feature', {});

			controller.delete(requestMock, responseMock);

			assert.equal(1, statusMock.called, 'status not called');
			assert.equal(true, statusMock.calledWith(204), 'status called with wrong code');
			assert.equal(1, sendMock.called, 'send not called');
			assert.equal(undefined, sendMock.calledArgs[0][0]);
		});
	});
});
