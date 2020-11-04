import os
c_language ={"compile":
                {   "src_path" : os.path.abspath('./data/main.c'),
                    "exe_path" : os.path.abspath('./data')+'/main',
                    "max_real_time" : 10000,
                    "max_memory" : 256 * 1024 * 1024,
                    "compile_cmd" : "gcc -o {exe_path} {src_path}"
                },
             "run":
                {"command" : "{exe_path}" 
                }
            }

cpp_language ={"compile":
                {   "src_path" : os.path.abspath('./data/main.cpp'),
                    "exe_path" : os.path.abspath('./data')+'/main',
                    "max_real_time" : 10000,
                    "max_memory" : 256 * 1024 * 1024,
                    "compile_cmd" : "g++ -o {exe_path} {src_path}"
                },
             "run":
                {"command" : "{exe_path}" 
                }
            }

py3_language = {"compile" :
                    {
                        "src_path" : os.path.abspath('./data/user.py'),
                        "exe_path" : os.path.abspath('./data')+'/user.pyc',
                        "max_real_time": 10000,
                        "max_memory": 128 * 1024 * 1024,
                        "compile_cmd" : "python3 -m py_compile {src_path}"
                    }
                ,
                "run":
                    {
                        "command" : "python3 {exe_path}"
                    }
                }
