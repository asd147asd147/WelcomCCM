import subprocess
import os
from timeit import default_timer as timer
import json
import sys
import psutil
import languages as lan

com_language = dict()
result = {"time": 0, "output": "", "memory" : "0","error" : "noerror"} 
select = sys.argv[1]
timeout_sec = float(sys.argv[2])
com_language = lan.language(select).compile_language
path = com_language["compile"]["src_path"]
compile_arr = com_language["compile"]["compile_cmd"]

cmd_compile = subprocess.Popen(compile_arr, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
(stdout,stderr) = cmd_compile.communicate()

if(stderr.decode('utf8') !=""):
    index = stderr.decode('utf8').find('error')
    string = stderr.decode('utf8')[index:]
    result['output'] = string
    json_data = json.dumps(result)
    result['error'] = "code"
    print(result)

else:
    run_arr = [com_language["run"]["command"]]
    start_time = timer()
    try:
        run = subprocess.Popen(args =run_arr, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
        p = psutil.Process(run.pid)
        Memoryuse = p.memory_info()[0]
        (stdout, stderr) = run.communicate(timeout = timeout_sec)
    except subprocess.TimeoutExpired:
        run.kill()
        result["error"]= "timeout"
        result["output"] = "TimeOut!"
        print(json.dumps(result))
        sys.exit(0)
    end_time = timer()

    real_time = round(end_time - start_time,4)

    result['time'] = real_time
    if(stdout.decode('utf8') == ""):
        index = stderr.decode('utf8').find(',')
        string = stderr.decode('utf8')[index+2:]
        result['output'] = string
        result['error'] = "code"
    else:
        result['output'] = stdout.decode('utf8')

    result['memory'] = str(Memoryuse/1000)+"KB"
    json_data = json.dumps(result)
    print(json_data)
