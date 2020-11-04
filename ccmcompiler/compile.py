import subprocess
import os
from timeit import default_timer as timer
import json
import sys
import psutil
import languages as lan
import sys

com_language = dict()
result = {"time": 0, "output": "", "memory" : 0} 
select = sys.argv[1]

com_language = lan.language(select).compile_language

path = com_language["compile"]["src_path"]
cmd_arr = [com_language["compile"]["compile_cmd"], path]

start_time = timer()
run = subprocess.Popen(cmd_arr, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
p = psutil.Process(run.pid)
Memoryuse = p.memory_info()[0]

(stdout, stderr) = run.communicate()
end_time = timer()

real_time = round(end_time - start_time,2)

result['time'] = real_time
if(stdout.decode('utf8') == ""):
    index = stderr.decode('utf8').find(',')
    string = stderr.decode('utf8')[index+2:]
    result['output'] = string
else:
    result['output'] = stdout.decode('utf8')

result['memory'] = Memoryuse
json_data = json.dumps(result)
print(json_data)
