var context = require.context('./components/', true, /-test\.js$/);
context.keys().forEach(context);
