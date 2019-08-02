import React from 'react';
import Businesses from '../businesses/businesses_container'

class Splash extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (
        <div>
            <div className='splish-splash'> 
                    <img className="title-icon" src="https://yuup-dev.s3.us-east-2.amazonaws.com/logo-1.png?response-content-disposition=inline&X-Amz-Security-Token=AgoJb3JpZ2luX2VjEF8aCXVzLWVhc3QtMSJHMEUCIBD%2F6ALY4QwexWBVr7BvdoHGpRGvAT%2BjNbCieZSSP6WCAiEAw3NKwED%2BkSH3Lsbv5z%2FrTmpHD7WX0Jn10pEMa5X1QWAq5AMI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw1MzY2MjI4NjIyMDEiDAChdpaYMkMo1%2FKfkCq4A12sj95TNpTeQtoxiRlLxsFeXFpX7fNTSm9HKQW7ZPEiYH2HjbrGDkf6kzw%2B5YwoikNt35TOrFP1DBnnjh7sZA6rsea%2FDfZgKQviYC6%2Bi5UqxmAF%2Fn%2BnfMt0V70j6mNtqy%2BgYOsBwu%2F3t0YDnkkTwYdI%2FL9hFJioeKmgGTysVQR4RPV0AsRKlSz9iQ23mZLN%2F7H17FS%2FaU2sF5sa7foEGF2I3xDX38wN%2FCpB806%2Frk%2B%2BTmzhmXK4N%2FkRp3Bn7gsVy5XIgUG0iRQ6ZcqM7AO1wl3wLmJPZbDdzJbIVZftAm3pOYrqKwKob0brL2V2fssmVRECF8olSRT454VPAlJt2%2B8jUAJArNBc1%2BysoSXEg2RR8IzBR1tCW7JyC0pCXXJUdfZzHXwgkG2ZCNi8%2FcdTBNQCiS5LozOBp1%2FMNnY%2Fj986pAhmOklMzNguXkBhKLDFfdjRl1b%2B%2FwSpq01LDIqd8DD0StK7H6gJgrKseXG3x4GUhY8wy9xbyofIY7ITiLbFHCgP27y%2BWuep0bgeAvjPfk6yDAha40l%2BJESwkYJhDjxMKvjdos1ea7w8SfIBzf8UpXLPKcv%2BE1FUMJmWkeoFOrQBkS7yvcTvOkXlrZl07p3pyZONcbIZBR3KhAZgFudRjLCWQWZGkwjs0%2FGLp0RP3v0n7SkQ1XlzSvbEytJBALNjhdtnoExDMBtU6Qi90sw6%2Bqhs3D%2BWj10uOS1%2B%2B%2BLurk0ZOsACd2UONeiOPyivZA99nhDZI1bdPzb3kBW2aJTz4KEjfaNST4WkOX1n%2BechY4Q4FgZaza2VMr23k53XfnjJbEnOyWCJQvq6MlMGciy%2FaK%2BdaMlY&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20190802T193910Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAXZ4JXB54T4UU7TFU%2F20190802%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Signature=8b5746101c83a4c243ba7f35455699676564adde7a996061a2357a89f4fe7d82" alt="logo"/>
                <label> Food
                    <input className="food-search" type="text" placeholder="food"/>    
                </label>
            </div>
            < Businesses />
        </div>
        )
    }
}


export default Splash;