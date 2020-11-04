import subprocess
import os
from timeit import default_timer as timer
import json
import sys
import psutil
import languages
import sys

result = {"time": 0, "output": "", "memory" : 0} 
select = sys.argv[1]

path = os.path.abspath('./data/user.py')
cmd_arr = ["python", path]

start_time = timer()
child = subprocess.Popen(cmd_arr, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
p = psutil.Process(child.pid)
Memoryuse = p.memory_info()[0]

(stdout, stderr) = child.communicate()
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


