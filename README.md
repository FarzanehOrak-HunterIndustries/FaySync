# FaySync
# faysync helps easier debuging async waterfall function
    ##No need all the console.logs to find out which function has not been executed 

# How to use it:
# In the command line type 'npm install faysync --save'
# Require the module in your project and use it exactly how you use async.waterfall

# How it works:
# faysync wraps the async.waterfall and decorates each function in the waterfall. It prints the functions that have been executed and callbacks which have been done. 