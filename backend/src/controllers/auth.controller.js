export const register = (req, res) => {
    res.json({ 
        message: 'Register route' 
    });
};

export const login = (req, res) =>
{
    res.json({
        message: 'Login Controller'
    });
};
export const me = (req , res) => {
    res.json({
        message: 'Current User'
    });
}
