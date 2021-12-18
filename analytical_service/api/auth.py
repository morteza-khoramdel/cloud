import requests


# Authentication Decorator
def resource_access_check(url, denied_view, required_response=200,):
    def factory(func):
        def wrapper(*args, **kwargs):
            req = args[0]
            token = req.COOKIES.get('token')
            
            print(token)
            data = {
                'resource': req.path,
                'operation': req.method,
            }
            if url is None:
                kwargs['status'] = 500
                print('url is none')
                return denied_view(*args, **kwargs)
            result = requests.post(url=url, json=data, cookies={'token':token})
            print('got some results')
            print(f"{result.status_code}-{type(result.status_code)}-{required_response}")
            print(req.path)
            print(result)
            if result.status_code == required_response:
                return func(*args, **kwargs)
            kwargs['status'] = result.status_code if result.status_code else 403
            return denied_view(*args, **kwargs)
        return wrapper
    return factory

