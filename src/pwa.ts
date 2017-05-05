declare var process;
declare var require;
if (process.env.NODE_ENV === 'production') {
    const runtime = require('offline-plugin/runtime');

    runtime.install({
        onUpdateRead: () => runtime.applyUpdate(),
        onUpdated: () => location.reload()
    });
}
