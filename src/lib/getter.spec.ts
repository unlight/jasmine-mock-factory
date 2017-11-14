import { MockFactory, Mock } from './index';

class AppService {

    appInitialized$ = { value: 42 };

    get isAppInitialized() {
        return this.appInitialized$.value === 42;
    }

}

describe('class getter', () => {

    fit('access to getter using other class properties', () => {
        debugger
        let mockAppService = MockFactory.create(AppService);
        mockAppService._spy.isAppInitialized._get.and.returnValue(true);
        expect((mockAppService as any).isAppInitialized).toBe(true);
    });

});
